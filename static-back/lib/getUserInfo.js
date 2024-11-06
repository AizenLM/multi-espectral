const getUserInfo = (user)=>{
    console.log(user)
    return{
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }
}
export default getUserInfo;