
export default {
    state:{
        Alert:'',      
    },

    getters:{
        getAdminAlert:(state) => state.Alert,    
    },

    mutations:{

        setAdminAlert:(state,message) => state.Alert = message,
    },

    actions: {

        setAdminAlert({commit},message){
            commit('setAdminAlert',message)
        }    
    }
}