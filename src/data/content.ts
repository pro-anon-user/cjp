export interface TimelineEvent {
    date: string;
    title: string;
    body: string;
    tag: "origin" | "escalation" | "clash" | "aftermath" | "repression" | "international";
}

export const timeline: TimelineEvent[] = [
    {
        date: "15 May 2026",
        title: "The remark that lit the fuse",
        body: "Chief Justice Surya Kant compares struggling, unemployed youth to 'cockroaches'. Within days, the Cockroach Janta Party is born — and refuses to be crushed.",
        tag: "origin",
    },
    {
        date: "16 May 2026",
        title: "CJP is born — from satire to resistance",
        body: "Abhijeet Dipke launches the Cockroach Janta Party as a joke. It quickly becomes the voice of lakhs of students fed up with a broken system.",
        tag: "origin",
    },
    {
        date: "May–June 2026",
        title: "NEET-UG 2026 scandal erupts",
        body: "Massive paper leak allegations surface. Students demand answers. The government initially downplays the crisis until public outrage forces acknowledgment.",
        tag: "origin",
    },
    {
        date: "6 June 2026",
        title: "Jantar Mantar sit-in begins",
        body: "CJP launches indefinite protest demanding Education Minister Dharmendra Pradhan's resignation and real exam reforms. Students refuse to be silenced.",
        tag: "escalation",
    },
    {
        date: "28 June 2026",
        title: "Sonam Wangchuk joins the fight",
        body: "Ladakh activist Sonam Wangchuk begins hunger strike in solidarity. The movement grows stronger despite police pressure.",
        tag: "escalation",
    },
    {
        date: "20 July 2026",
        title: "'Chalo Sansad' — March met with brutality",
        body: "Thousands march peacefully toward Parliament. Delhi Police + CRPF respond with tear gas and lathi charges.",
        tag: "clash",
    },
    {
        date: "20–21 July 2026",
        title: "Injured protesters fill hospitals",
        body: "Over 80 protesters injured. A brave 21-year-old woman ends up on ventilator at RML Hospital after police action. She is now recovering.",
        tag: "clash",
    },
    {
        date: "21 July 2026",
        title: "Pellet gun allegations surface",
        body: "Multiple victims show pellet injuries. Videos appear to show CRPF/RAF using pump-action guns. Delhi Police denies everything — again.",
        tag: "clash",
    },
    {
        date: "22 July 2026",
        title: "Supreme Court avoids the videos",
        body: "Lawyers urge urgent review of crackdown footage. The Court declines, stating, \"We are not interested in videos. We don\'t have time to watch... Please don\'t waste our time.\" Protesters continue demanding justice.",
        tag: "aftermath",
    },
    {
        date: "22 July 2026",
        title: "CJP holds the line",
        body: "Movement pauses risky street marches to protect lives but continues the sit-in at Jantar Mantar. The fight for accountability is far from over.",
        tag: "aftermath",
    },
    {
        date: "23 July 2026",
        title: "Internet blackout tightens around Jantar Mantar",
        body: "Mobile internet is suspended multiple times in a 1.5 km radius around the protest site. Signal jammers are deployed. Students report having to walk kilometres just to send a message.",
        tag: "repression",
    },
    {
        date: "23 July 2026",
        title: "Secret order targets BitChat",
        body: "At 11:16 pm, I4C issues Notice No. 11072601011432 directing GitHub to remove BitChat repositories within three hours. The open-source Bluetooth mesh app was being used by protesters during shutdowns.",
        tag: "repression",
    },
    {
        date: "24 July 2026",
        title: "IFF exposes the censorship",
        body: "Internet Freedom Foundation publicly reveals and condemns the BitChat takedown order as illegal and authoritarian. The government never published the notice itself.",
        tag: "repression",
    },
    {
        date: "24 July 2026",
        title: "Food supply to protest site blocked",
        body: "Delhi Traffic Police and Delhi Police issue conflicting orders stopping food deliveries to Jantar Mantar. Gig workers are halted and questioned while trying to deliver basic supplies to protesters.",
        tag: "repression",
    },
    {
        date: "24 July 2026",
        title: "Police block students from reaching Jantar Mantar",
        body: "Police stop students at multiple points across Delhi, preventing them from reaching the protest site. When media questions the action, officers claim the press is interfering in their work.",
        tag: "repression",
    },
    {
        date: "24 July 2026",
        title: "Judge reprimands police over illegal 3-hour detention",
        body: "A judge sharply questions a police officer for detaining protesters for over three hours without any accusation and without following seizure protocol. The court orders a departmental inquiry, stating the action was deliberate, though the officer is ultimately shown leniency after his lawyer intervenes.",
        tag: "escalation",
    },
    {
        date: "24–25 July 2026",
        title: "Permanent barricades seal the protest site",
        body: "Authorities begin erecting permanent barricades on all routes in and out of Jantar Mantar, effectively confining protesters and restricting freedom of movement.",
        tag: "repression",
    },
    {
        date: "25 July 2026",
        title: "UN speaks on the right to protest",
        body: "UN spokesperson Stéphane Dujarric states that people wishing to protest peacefully must be allowed to do so without fear of harassment, arrest or injury.",
        tag: "international",
    },
    {
        date: "25 July 2026",
        title: "Nationwide candle march announced",
        body: "CJP calls for a silent nationwide candle march on Sunday, 26 July at 6 PM outside every District Collector’s office across India, in memory of the injured and in protest against police brutality.",
        tag: "escalation",
    },
    {
        date: "25 July 2026",
        title: "Police stop even water from reaching protesters",
        body: "Officers are seen illegally intercepting gig workers and blocking food and water deliveries to the protest site. Protesters compare the tactic to collective punishment.",
        tag: "repression",
    },
    {
        date: "25 July 2026",
        title: "Education Minister submits resignation",
        body: "Union Education Minister Dharmendra Pradhan sends his resignation letter to the Prime Minister.",
        tag: "escalation",
    },
];

export interface LedgerEntry {
    claim: string;
    protesterAccount: string;
    sourceNote: string | null;
}

export const ledger: LedgerEntry[] = [
    {
        claim: "Is the BJP government violating the right to life by using pellet guns on protesters?",
        protesterAccount: "Multiple injured protesters and hospital records show clear pellet wounds. Videos appear to show CRPF/RAF personnel firing pump-action guns. This is the first reported use in Delhi protests.",
        sourceNote: "The Hindu, Outlook India, BOOM Live — 21–22 July 2026",
    },
    {
        claim: "Is the BJP government violating the right to life by allowing shots to be fired on protesters?",
        protesterAccount: "Shots have been fired in Bihar's Jehanabad amid the ongoing protests.",
        sourceNote: "Video evidence: https://x.com/preeti_dog22864/status/2080513437122396359",
    },
    {
        claim: "Is the BJP government violating the right to dignity and bodily integrity through sexual harassment by police?",
        protesterAccount: "Police in civil dress manhandled a girl during the protest, amounting to sexual harassment.",
        sourceNote: "Video evidence: https://x.com/Vtxt21/status/2080487498393022834",
    },
    {
        claim: "Is the BJP government violating the right to peaceful assembly by preparing to assault protesters?",
        protesterAccount: "Delhi police were seen preparing to assault peaceful protesters.",
        sourceNote: "Video evidence: https://x.com/ChekrishnaCk/status/2080488258157613306",
    },
    {
        claim: "Is the BJP government violating the right to life by using modified batons with nails?",
        protesterAccount: "Police used modified batons with nails protruding through them, posing a severe risk of grievous injury or death.",
        sourceNote: "Video evidence: https://x.com/MuraliGorati1/status/2080287954761846824",
    },
    {
        claim: "Is the BJP government violating the right to life of a minor by leaving a 16-year-old critically injured?",
        protesterAccount: "A 16-year-old was left critically injured and on the brink of death after being assaulted during the protest.",
        sourceNote: "Video evidence: https://x.com/Vishwaguru2026/status/2080602609514377688",
    },
    {
        claim: "Is the BJP government violating the right to peaceful assembly by assaulting protesters?",
        protesterAccount: "Peaceful protesters were brutally assaulted by police personnel.",
        sourceNote: "Video evidence: https://x.com/ChapraZila/status/2080575312417677586",
    },
    {
        claim: "Is the BJP government violating the right to legal representation by blocking lawyers?",
        protesterAccount: "Lawyers were physically blocked from meeting and providing legal access to detained protesters, violating basic human rights.",
        sourceNote: "Multiple videos: https://x.com/TheDeshBhakt/status/2080344014705021021 and https://x.com/rishikeshlaw/status/2080583433903071654",
    },
    {
        claim: "Is the BJP government violating the right to privacy by misusing Aadhaar data?",
        protesterAccount: "Government officials were caught misusing Aadhaar data, raising serious privacy violation concerns.",
        sourceNote: "Video evidence: https://x.com/azizkavish/status/2080353214021632105",
    },
    {
        claim: "Is the BJP government violating the right to free speech through state-orchestrated disinformation?",
        protesterAccount: "Evidence shows state-sponsored disinformation campaigns and bribery using public funds to manipulate narratives.",
        sourceNote: "Video evidence: https://x.com/voicesindians/status/2080360301082591269 & https://x.com/voicesindians/status/2080472228936949989",
    },
    {
        claim: "Is the BJP government violating the rule of law through theft under color of authority?",
        protesterAccount: "Government officials were involved in stealing food and other resources meant for protesters or the public (official misconduct/malfeasance).",
        sourceNote: "Video evidence: https://x.com/mr_mayank/status/2080552934958670209",
    },
    {
        claim: "Is the BJP government an authoritarian government?",
        protesterAccount: "The government's order to GitHub to remove BitChat repositories is illegal and constitutes authoritarian censorship by a rogue government. The notice bypasses legal safeguards and targets citizens’ ability to speak when the state cuts off connectivity.",
        sourceNote: "Internet Freedom Foundation statement, 24 July 2026. Link: https://x.com/internetfreedom/status/2080586673977438351?s=20",
    },
    {
        claim: "Is the BJP government violating the right to freedom of movement through wrongful confinement?",
        protesterAccount: "Permanent barricades are being erected across all routes in and out of Jantar Mantar, confining protesters and restricting their movement.",
        sourceNote: "Video evidence: https://x.com/rishikeshlaw/status/2080868341661741437",
    },
    {
        claim: "Is the BJP government violating the right to life by denying food and water to peaceful protesters?",
        protesterAccount: "Police are stopping food and even water from reaching the protest site, illegally questioning delivery workers. No law permits this form of collective starvation.",
        sourceNote: "Video evidence: https://x.com/Nher_who/status/2080920728829132915 & Photo evidence: https://x.com/JournoAshutosh/status/2080683843783471538",
    },
];

export const slots = [
    {
        label: "In Bihar's Jehanabad, shots have been fired.",
        tag: "Shots Fired",
        type: "video",
        url: "/cjp/videos/shots fired.mp4",
        source: "https://x.com/preeti_dog22864/status/2080513437122396359?s=20"
    },
    {
        label: "Police in civil dress manhandled a girl in protest.",
        tag: "Sexual Harassment",
        type: "video",
        url: "/cjp/videos/sexual harrasment.mp4",
        source: "https://x.com/Vtxt21/status/2080487498393022834"
    },
    {
        label: "Delhi police preparing to assult peaceful protesters.",
        tag: "Assult",
        type: "video",
        url: "/cjp/videos/preparation for assult.mp4",
        source: "https://x.com/ChekrishnaCk/status/2080488258157613306"
    },
    {
        label: "Use of Pellet Gun",
        tag: "Attempted murder",
        type: "video",
        url: "/cjp/videos/pellet gun.mp4",
        source: "https://x.com/Delhiite_/status/2080596953470300285"
    },
    {
        label: "Mis-use of Aadhar data by government officials.",
        tag: "Privacy Violation",
        type: "video",
        url: "/cjp/videos/misuse of adhar data.mp4",
        source: "https://x.com/azizkavish/status/2080353214021632105"
    },
    {
        label: "State-Orchestrated Disinformation",
        tag: "State-Sponsored Censorship",
        type: "video",
        url: "/cjp/videos/govt bribary.mp4",
        source: "https://x.com/voicesindians/status/2080360301082591269"
    },
    {
        label: "Propaganda through misappropriation of public funds.",
        tag: "State-Sponsored Censorship",
        type: "video",
        url: "/cjp/videos/bribary.mp4",
        source: "https://x.com/voicesindians/status/2080472228936949989"
    },
    {
        label: "Official misconduct / Malfeasance in office",
        tag: "Theft under color of authority",
        type: "video",
        url: "/cjp/videos/foods stolen.mp4",
        source: "https://x.com/mr_mayank/status/2080552934958670209"
    },
    {
        label: "16-Year-Old left critically injured during a protest.",
        tag: "Grievous bodily harm",
        type: "video",
        url: "/cjp/videos/brink of death.mp4",
        source: "https://x.com/Vishwaguru2026/status/2080602609514377688"
    },
    {
        label: "Peaceful protesters assulted by Police.",
        tag: "Assult",
        type: "video",
        url: "/cjp/videos/assult.mp4",
        source: "https://x.com/ChapraZila/status/2080575312417677586"
    },
    {
        label: "Lawyers blocked access to detained protesters.",
        tag: "Human Rights Violation",
        type: "video",
        url: "/cjp/videos/human right violation.mp4",
        source: "https://x.com/TheDeshBhakt/status/2080344014705021021"
    },
    {
        label: "Use of modified batons with nails protruding through them.",
        tag: "Attempted murder",
        type: "video",
        url: "/cjp/videos/attempted murder.mp4",
        source: "https://x.com/MuraliGorati1/status/2080287954761846824?s=20"
    },
    {
        label: "Lawyers blocked access to detained protesters.",
        tag: "Human Rights Violation",
        type: "video",
        url: "/cjp/videos/human rights violation.mp4",
        source: "https://x.com/rishikeshlaw/status/2080583433903071654"
    },
    {
        label: "Police, CRPF, and RAF personnel deployed around the Jantar Mantar protests have been asked to remove their name tags.",
        tag: "Contempt of Court",
        type: "image",
        url: "/cjp/images/illegal act.png",
        source: "https://x.com/SaketGokhale/status/2080660880887632005?s=20"
    },
    {
        label: "BJP government orders GitHub to remove BitChat.",
        tag: "Authoritarian censorship",
        type: "image",
        url: "/cjp/images/bitchat.png",
        source: "https://x.com/internetfreedom/status/2080586673977438351?s=20"
    },
    {
        label: "Permanent Barricades being eracted across all routes in and out of Jantar Mantar",
        tag: "Wrongful Confinement",
        type: "video",
        url: "/cjp/videos/wrongful confinement.mp4",
        source: "https://x.com/rishikeshlaw/status/2080868341661741437"
    },
    {
        label: "Food deliveries to Jantar Mantar blocked by police",
        tag: "Endangerment of Life",
        type: "image",
        url: "/cjp/images/food blocked.png",
        source: "https://x.com/JournoAshutosh/status/2080683843783471538",
    },
    {
        label: "Police stopping students from reaching the protest site",
        tag: "Wrongful Confinement",
        type: "video",
        url: "/cjp/videos/students blocked.mp4",
        source: "https://x.com/moliticsindia/status/2080625913390326227",
    },
    {
        label: "Police stopping food and water deliveries to protest site",
        tag: "Endangerment of Life",
        type: "video",
        url: "/cjp/videos/food blocked.mp4",
        source: "https://x.com/Nher_who/status/2080920728829132915",
    },
];

export const pradhanNote = {
    title: "The Ultimate Irony: 1997 vs 2026",
    body: "In 1997, student leader Dharmendra Pradhan protested exam paper leaks in Odisha and faced lathi charges. Today, as Education Minister, he faces the same demand for resignation over similar leaks — while his government denies systemic failure.",
};

export const sources = [
    { label: "Wikipedia — 2026 Delhi Jantar Mantar protests", url: "https://en.wikipedia.org/wiki/2026_Delhi_Jantar_Mantar_protests" },
    { label: "The Hindu — Pellet gun reports", url: "https://www.thehindu.com/news/national/pellet-guns-shock-batons-used-against-protesters-in-delhi-police-deny/article71250708.ece" },
];
