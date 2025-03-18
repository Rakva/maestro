import insa_logo from "./Insa_rennes_logo.svg"

const insa = {
    name: "INSA Rennes",
    text: "",
    contacts: {
        address: "20, Avenue des Buttes de Coësmes",
        post: 35700,
        city: "Rennes",
        country: "France",
        number: "02 23 23 82 00"
    },
    logo: insa_logo,
    supervisors: [
        {
            name: "Barbara Fila",
            level: "Ph.D.",
            link: "https://people.irisa.fr/Barbara.Fila/"
        },
        {
            name: "Sasa Radomirovic",
            level: "Ph.D.",
            link: "https://www.surrey.ac.uk/people/sasa-radomirovic"
        }
    ],
    supervisor_text: "This project is supervised by Dr. Barbara Fila, a lecturer at INSA Rennes and a researcher at IRISA, specializing in security. This project is carried out in collaboration with Dr. Sasa Radomirovic, a researcher at the University of Surrey specializing in formal security modeling."
};

export default insa;
