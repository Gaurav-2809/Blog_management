//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES={
    loading:{
        title: 'Loading...',
        message:'Data is being Loaded, Please Wait'
    },
    success:{
        title:'Success',
        message:'Data successfully loaded.'
    },
    responseFailure:{
        title: 'Error',
        message:'An error occurred while fetching from server. Please try again.'
    },
    requestFailure:{
        title: 'Request Error',
        message:'There was an issue with your request.'
    },
    newtorkError:{
        title:'Error',
        message:'Unable to connect with the server. Please check internet connectivity and try again.'
    }
}

//API SERVICE CALL

export const SERVICE_URLS={
    userSignup:{url:'/signup', method:'POST'},
    userLogin:{url:'/login',method:'POST'}
}