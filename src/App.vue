<template>
  <v-app src="require('./assets/truck.png')" style="background-color:#F5FAFF;">
    
      <div v-if="!login">
        <Home/>
      </div>
      <div v-if="login">
      <Login/>
      </div>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
// import HelloWorld from './components/HelloWorld';
// import Login from './views/Login'; #f1f3f4, #F5FAFF
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  components: {
         Home, 
         Login,
  },

  data (){
    return{
      login:true,
    }
    //
  },

    created(){
      
      // (localStorage.length == 4 && !localStorage.client == "" ) && ( !localStorage.category == '' && !localStorage.secret == '')
    // if (localStorage.length >= 3 && localStorage.category === "1") {    
      
    //   this.login = false
    //       this.$router.push('/agent/tenders/open')
    //       console.log('app');
    //       console.log(this.$store.state.tender.logins);
          
    // }else if (localStorage.length >= 3 && localStorage.category === "2"){
      
    //   this.login = false
    //   this.$router.push('/transporter/tenders/open')

    // }else if (localStorage.length >= 3 && localStorage.category === "3"){
      
    //   this.login = false
    //   this.$router.push('/client')

    // }else{

    //   this.login = true;
    //         console.log('ddntlog in');
            
      
    //  }
                    if (localStorage.length >= 3){
                       
                       if ((this.$route.fullPath == '/' || this.$route.fullPath == '/signup') && localStorage.category === "1") {
                             
                         this.$router.push('/agent/tenders/open')
    
                       }else if((this.$route.fullPath == '/' || this.$route.fullPath == '/signup')  && localStorage.category === "2"){

                          
                          this.$router.push('/transporter/tenders/open')

                       }else if((this.$route.fullPath == '/' || this.$route.fullPath == '/signup') && localStorage.category === "3"){

                          this.$router.push('/client')

                       }


                      this.login = false
                       

                    }else{

                      this.login = true
                      this.$router.push('/')

                    }


    },
    
    computed: {
      ...mapGetters([
        'LOAD_LOGIN'
      ]),
    }
}
</script>

<style>
.large-preview{

    /*width: 500px;
    height: 500px;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
 }

 span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }
  
 #large_thumbnail{
   width:auto;
   height:auto;
   /* max-width:500px; */
   max-height:500px;
 }

 .oxoImg:hover{
   cursor: pointer;
 }

 img.preview{
     width: 248px;
     height: 200px
 }
 .v-image__image--cover{
   background-size: contain !important ;
 }
 .categorySel{
   max-width: 200px !important;
   text-align: center;
 }

 a {
    text-decoration: none;
}


</style>
