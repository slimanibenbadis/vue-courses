const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'http://google.com',
            raw_url: '<a href="http://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },
        increment() {
            this.age++;
        },
        updateLastName(event) {
            this.lastName = event.target.value
        }
    }
}).mount('#app')

//---data proxying
// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')