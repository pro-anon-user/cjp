export interface TimelineEvent {
    date: string;
    title: string;
    body: string;
    tag: "origin" | "escalation" | "clash" | "aftermath";
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
];

export interface LedgerEntry {
    claim: string;
    protesterAccount: string;
    sourceNote: string | null;
}

export const ledger: LedgerEntry[] = [
    {
        claim: "Were pellet guns used on July 20?",
        protesterAccount: "Multiple injured protesters and hospital records show clear pellet wounds. Videos appear to show CRPF/RAF personnel firing pump-action guns. This is the first reported use in Delhi protests.",
        sourceNote: "The Hindu, Outlook India, BOOM Live — 21–22 July 2026",
    },
    {
        claim: "Access to justice blocked?",
        protesterAccount: "Protesters were being heavily restricted from contacting lawyers and facing surveillance/intimidation during and after the march.",
        sourceNote: null,
    },
];

export const slots = [
    { label: "Jantar Mantar sit-in", tag: "Photo" },
    { label: "'Chalo Sansad' march, 20 Jul", tag: "Video" },
    { label: "Wangchuk's hunger strike", tag: "Photo" },
    { label: "Hospital ward, RML/LHMC", tag: "Photo" },
    { label: "Tear gas response, Jantar Mantar", tag: "Video" },
    { label: "Parliament floor debate", tag: "Clip" },
];

export const pradhanNote = {
    title: "The Ultimate Irony: 1997 vs 2026",
    body: "In 1997, student leader Dharmendra Pradhan protested exam paper leaks in Odisha and faced lathi charges. Today, as Education Minister, he faces the same demand for resignation over similar leaks — while his government denies systemic failure.",
};

export const sources = [
    { label: "Wikipedia — 2026 Delhi Jantar Mantar protests", url: "https://en.wikipedia.org/wiki/2026_Delhi_Jantar_Mantar_protests" },
    { label: "The Hindu — Pellet gun reports", url: "https://www.thehindu.com/news/national/pellet-guns-shock-batons-used-against-protesters-in-delhi-police-deny/article71250708.ece" },
];
