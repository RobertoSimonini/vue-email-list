/*
    # DESCRIZIONE:

    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

    - BONUS
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.

    -SUPER BONUS
    Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte? 

*/

const app = Vue.createApp ({

    data() {
        return {
            emails: [],
            isLoading : false
        }
    },
    methods:  {
        getRandomEmail () {
            this.isLoading = true; 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                this.emails.push(response.data.response);
                })  .catch(error => {
                console.log(error);
                })  .then (() => {
                this.isLoading = false;
                })
        }
    },
    mounted () {
        for (let i = 0; i < 10; i++){
            this.getRandomEmail();
        }
    }

});

app.mount('#root');