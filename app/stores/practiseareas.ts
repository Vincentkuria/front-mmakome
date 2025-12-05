import { defineStore } from 'pinia'

export const usePractiseareasStore = defineStore('practiseareas',()=>{
const practiseareas=[
  {
    image:"/corporate.png",
    title:'Commercial & Corporate Law',
    description: "We advise clients on the full spectrum of corporate and commercial issues, from business formation and structuring, through joint-ventures, mergers & acquisitions, supply and distribution agreements, regulatory compliance, and corporate governance to cross-border transactions. For example, Kenyan firms in this space advise on incorporation of domiciled and foreign companies, joint-ventures, high-value asset-acquisitions and venture capital-type deals. Our team helps you anticipate legal risk, design sound contracts, ensure compliance with legislation such as the Companies Act and sector-specific regulation, and navigate commercial complexity with agility."
  },
  {
    image:"/alternative-dispute-resolution.png",
    title:"Commercial Litigation & Dispute Resolution",
    description:"When disputes arise, we offer thorough advocacy and strategic resolution. Our litigators represent clients in contract-disputes, debt recovery, enforcement of securities, public-procurement reviews and insurance-claims. The recent landscape shows that Kenyan law-firms address matters such as receiverships, liquidation, injunctive relief and multi-forum dispute resolution. We emphasise early identification of risk, negotiation and Alternative Dispute Resolution (mediation/arbitration) where appropriate, and the readiness to prosecute or defend robustly in court when required."
  },
  {
    image:"/debt.png",
    title:"Banking, Finance & Debt Recovery",
    description:"Our experience includes acting for banks, micro-finance institutions, insurers and borrowers. We advise on the structuring of loans, securities, enforcement of guarantees, prosecution of creditors’ claims and receiverships. For instance, leading practices in Kenya combine detailed understanding of lending documentation with litigation-capability to realise recovery of securities. We tailor our approach to each client’s risk profile and the regulatory environment of Kenyan financial services."
  },
  {
    image:"/contract.png",
    title:"Conveyancing, Real Estate & Property Law",
    description:"We handle acquisition, sale and leasing of residential, commercial and agricultural property, change of user applications, securitisation of property, and property-related disputes. Kenyan firms describe services including searches, transfers, charges, discharges, and subdivision/amalgamation of titles. Our focus is on protecting your title, ensuring clean documentation, and minimising exposure to risks such as fraud, irregular approvals or land-use issues."
  },
  {
    image:"/clipboard.png",
    title:"Insurance Law & Defence",
    description:"We advise and represent insurers, corporate clients and policy-holders in matters such as policy interpretation, liability claims, subrogation, settlement negotiation and litigation. Given the intersection of commercial risk and regulatory obligations, our experience in defending insurance matters for both corporates and insurers provides a distinct advantage. Clients value our ability to merge technical underwriting insight with robust advocacy when claims escalate."
  },
  {
    image:"/labour.png",
    title:"Employment, Labour & Regulatory Compliance",
    description:"We assist employers, executives and corporate clients with compliance audits, employment contracts, retrenchment and redundancy, unfair-dismissal defence, executive agreements and work-permit issues. The Kenyan legal-market emphasises the importance of embedding employment-law awareness into corporate governance and operations. By keeping abreast of regulatory change and case-law, we help you reduce labour-risk and maintain workplace compliance."
  }
]
return {practiseareas}
})
