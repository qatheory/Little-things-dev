import AOS from 'aos'
export default ({ app }, inject) => {
  app.AOS = new AOS.init({ once: false, useClassNames: false, duration: 800 })
}
