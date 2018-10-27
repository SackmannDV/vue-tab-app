import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// How to call this service
// AuthenticateService.register({
//     email: 'test@gmail.com',
//     password: '12345678'
// });
