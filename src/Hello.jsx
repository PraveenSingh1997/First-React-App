function Hello() {

    let myName = 'Praveen' ; 
    let number = 456 ; 
    let fullName = () => {
        return 'Praveen Singh'
    }
    return <h3>
        MessageNo : {number} : 
        Hello this is the future speaking  . I am your Master {myName} -  {fullName()}
    </h3>
}

export default Hello ; 