const theory_text = [
    {
        title: "Basic concepts",
        text: "Users are persons that interact with services and have accounts with these services. An account can be accessed by providing credentials. We shall take a broad view of these concepts to also model the physical world. An account provides access to a service or Resource, which can be digital or physical. Credentials can also be digital or physical, and must be presented to access, or unlock, an account.",
        type: "theory"
    },
    {
        title: "Basic concepts",
        text: "A set of credentials provides access to an account if presenting these credentials is sufficient to access the account. Losing all credentials in a set of credentials locks a user out of an account if at least one of these credentials is necessary to access the account",
        type: "details"
    },
    {
        title: "Graph model",
        text: "We model a user’s account setup as an account access graph. Vertices represent credentials or accounts. We model the relation of providing access to a Resource v as follows. When v represents an account, we consider the access mechanisms ofv. We draw edges of the same color from vertices that are all needed to access the account. We draw edges of different colors from vertices that represent alternative access methods. Whenv represents a credential, we draw an edge tov when an account provides access to that credential. For example, a password manager is an account that provides access to its stored passwords.",
        type: "details"
    },
    {
        title: "Graph model",
        text: "The semantics of colors is local to each target Resource: whether two edges have the same color is only relevant if they are edges to the same target Resource. We reuse colors for simplicity in our examples for different target vertices. We use different types of lines (dashed, dotted, and solid) for different colors to distinguish them also in the black-and-white version of this paper.",
        type: "details"
    },
    {
        title: "Access sets",
        text: "In this section, we define an account’s access sets, which denote the minimal sets of credentials that are sufficient to provide access to the account. An account’s access sets model the possibilities an attacker has to compromise the account. We use an account’s access base to compute a security score for that account, enabling a detailed security evaluation. We first define what it means that a set of vertices provides access to another Resource. A set of vertices V directly provides access to a Resource v if it includes v or includes, for some color c, all vertices with c-colored edge to v.",
        type: "theory"
    },
    {
        title: "Security scoring schemes",
        text: "Thesecurity of a user’s account setup depends on many factors. Not all accounts are equally valuable. Some users share their credentials with friends or family and other users are at particular risk of having their physical devices stolen. A security evaluation of a user’s account setup should thus depend on the user’s threat model. There can therefore be no single evaluation method that fits all use cases",
        type: "theory"
    },
    {
        title: "Security scoring schemes",
        text: "To allow for a flexible yet expressive security analysis, we introduce security scoring schemes. These schemes provide a general method to evaluate an account’s security using its access base. Recall that an account’s access base consists of the credential sets that are sufficient to compromise that account. From these sets, security scoring schemes compute a security score for the account. A score is a general concept that can be defined over various domains. These domains are (partially) ordered, and a higher score denotes a more secure account.",
        type: "theory"
    },
    {
        title: "Security scoring schemes",
        text: "Asecurity scoring scheme should meaningfully measure the security of accounts. In particular, whenever one account is at least as secure as another, a scoring scheme should assign at least as high a score to the first account as to the second. We formalize this requirement. We define the notion of an account being at least as secure as another by implication. If an attacker that can access an account Resource vb can also always access another account Resource var, then we say that vb is at least as secure as va.",
        type: "details"
    },
    {
        title: "An attacker model scoring scheme",
        text: " Animportant measure of an account’s security is which kinds of attackers could potentially compromise the account. We consider the possibility of compromise by different kinds of attackers. We associate each account with the weakest attacker that could potentially compromise that account. Note that possibility here only means that such a compromise could occur, but not necessarily that it is likely.  For example, an account that is only protected by a password could be compromised by a remote attacker, while an account that requires authentication from a device not connected to the Internet could only be compromised by a local attacker. We formalize these concepts with a security scoring scheme based on n attribute sets A1,. . .,An modeling attacker capabilities. We model an attacker as an n-tuple (a1,...,an) ∈ A1 × ··· ×An.",
        type: "theory"
    },
    {
        title: "Inherent account vulnerabilities",
        text: "Our modeling and analysis so far was based on the assumption that an account can be accessed only by presenting credentials. In reality, services may have vulnerabilities that allow an attacker to access an account without credentials. We can model such vulnerabilities by also including intermediate vertices representing accounts in Vinit, and assigning initial scores to them. An account’s initial score denotes how difficult it is for an attacker to compromise it by means other than compromising the user’s credentials.",
        type: "theory"
    },
    {
        title: "Lockout sets and recoverability",
        text: "We say that an account with low lockout risk achieves high recoverability. We can then analyze both security and recoverability of an account setup and understand whether the setup achieves a good balance between the two. Lockout analysis is analogous to access analysis, and the main idea of the analogy is the following. To obtain access, an attacker must compromise all the necessary credentials for one access method.  To be locked out, a user must lose one of the necessary credentials for each access method.",
        type: "theory"
    },
    {
        title: "Recovery paths and backdoors",
        text: " One kind of weakness in an account access graph is a backdoor. An account has a backdoor when it can be accessed more easily using recovery access methods than using its primary authentication method. We formalize this notion with a predicate. For this, we first explicitly define the subset of edges that are associated with recovery methods. We then consider for an account access graph G a reduced version G′ of that graph that does not contain the recovery edges. An account has a backdoor with respect to a security scoring scheme if its score in G is lower than its score in G′, i.e., it is easier to access this account by using at least one recovery method.",
        type: "theory"
    },
    {
        title: "Account importance",
        text: "Different accounts are of varying value and importance for the user. For example, an online banking account may be more valuable than other accounts. A risk analysis may indicate that a lower score is acceptable for a less important account. When importance values are assigned to each account, we can then combine this information with a scoring scheme to discover inconsistencies",
        type: "theory"
    }
]
export default theory_text;