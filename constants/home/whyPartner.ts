import { ShieldCheck, ShieldAlert, Zap, Clock, Handshake } from "lucide-react";

// Sourced from Cognition_IES_Engineering_Excellence.pptx, Slide 10 ("Why Partner With
// Cognition IES"). Copy is verbatim from the deck — edit here if you want to diverge.
export const WHY_PARTNER_CONSTANTS = {
    TITLE: "Why Partner With Cognition IES",
    SUBTITLE: "Every project is executed with a strong focus on the principles that define how we work.",
    ITEMS: [
        {
            icon: ShieldCheck,
            title: "Quality",
            desc: "Rigorous engineering standards on every deliverable.",
        },
        {
            icon: ShieldAlert,
            title: "Safety",
            desc: "Safety-first design across all disciplines.",
        },
        {
            icon: Zap,
            title: "Innovation",
            desc: "Digital technologies integrated into engineering delivery.",
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            desc: "Reliable schedules from concept through commissioning.",
        },
        {
            icon: Handshake,
            title: "Trusted Partnership",
            desc: "Long-term relationships built on transparency.",
        },
    ],
};