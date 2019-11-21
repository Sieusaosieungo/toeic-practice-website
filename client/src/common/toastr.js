import toastr from 'toastr'
import '../../node_modules/toastr/build/toastr.min.css'

const Toastr = {
  success (data) {
    if (data.message) {
      toastr.success(data.message)
    } else {
      toastr.success(data)
    }
  },
  error (data) {
    if (data.response && data.response.data.message) {
      if (data.response.data.status_code === 401) {
        if (localStorage.getItem('user')) {
          localStorage.removeItem('user')
          window.location.href = '/login'
        } else {
          toastr.error(data.response.data.message)
        }
      } else if (data.response.data.status_code === 422) {
        const errors = []
        Object.keys(data.response.data.errors).map(key => (
          data.response.data.errors[key].map(error => (
            errors.push(error)
          ))
        ))
        toastr.error(errors.join('<br>'))
      } else {
        toastr.error(data.response.data.message)
      }
    } else if (data && data.message) {
      toastr.error(data.message)
    } else {
      toastr.error(data)
    }
  }
}

export default Toastr
