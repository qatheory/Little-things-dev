import AOS from 'aos'
export default ({ app }, inject) => {
  app.AOS = new AOS.init({ once: true, duration: 800 })
}
