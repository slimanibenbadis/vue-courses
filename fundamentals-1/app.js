const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'http://google.com',
            raw_url: '<a href="http://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed property was called')
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
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