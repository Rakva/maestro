const dictionary = [
    {
        term: "Account access graph",
        explanation: "An account access graph is a directed graph. Each Resource represents either a credential or an account. An edge from a credential to an account denotes that the credential is used in an authentication mechanism of that account. An edge from one account to another denotes that the first account can be used to access the second, using for example a recovery method or single sign-on."
    },
    {
        term: "Account Ecosystem Manager",
        explanation: "This type of manager is an application that allows a user to view his entire account environment, integrating all connections between his accounts. It represents all the devices, credentials, keys and documents needed. An account ecosystem manager is based on a mathematical theory called the access graph."
    }
]
export default dictionary;