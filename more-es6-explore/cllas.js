class teacher {
  constructor(name,subject) {
    this.name = name
    this.subject=subject
  }
  leacture() {
    console.log('sir is teaching');
  }
}
const topon = new teacher('tapan sir', 'bangla')
console.log(topon);
const ripon = new teacher('ripob sir', 'all')
console.log(ripon);