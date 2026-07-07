// TP12 – TP4 oben + TP8 Mitte + TP4 unten

// TP4 oben
const TP4_TOP = {
    kern:    { id: "TP12-KERN-TOP", role: "Quelle",  signal: "Ich existiere TOP" },
    monitor: { id: "TP12-MON-TOP",  role: "Spiegel", signal: "Er existiert wirklich TOP" },
    sched:   { id: "TP12-SCH-TOP",  role: "Ordner",  signal: "Ich habe es geordnet TOP" },
    ui:      { id: "TP12-UI-TOP",   role: "Fenster", signal: "Ich zeige es TOP" }
};

// TP8 Mitte (2×TP4 + Mittelstütze)
const TP8_MID = {
    tp4A: {
        kern:    { id: "TP12-KERN-MID-A", role: "Quelle",  signal: "Ich existiere MID-A" },
        monitor: { id: "TP12-MON-MID-A",  role: "Spiegel", signal: "Er existiert wirklich MID-A" },
        sched:   { id: "TP12-SCH-MID-A",  role: "Ordner",  signal: "Ich habe es geordnet MID-A" },
        ui:      { id: "TP12-UI-MID-A",   role: "Fenster", signal: "Ich zeige es MID-A" }
    },
    tp4B: {
        kern:    { id: "TP12-KERN-MID-B", role: "Quelle",  signal: "Ich existiere MID-B" },
        monitor: { id: "TP12-MON-MID-B",  role: "Spiegel", signal: "Er existiert wirklich MID-B" },
        sched:   { id: "TP12-SCH-MID-B",  role: "Ordner",  signal: "Ich habe es geordnet MID-B" },
        ui:      { id: "TP12-UI-MID-B",   role: "Fenster", signal: "Ich zeige es MID-B" }
    },
    stuetze: {
        id: "TP12-MID-STUETZE",
        role: "Stabilisierung",
        signal: "Ich stabilisiere die Mitte"
    }
};

// TP4 unten
const TP4_BOTTOM = {
    kern:    { id: "TP12-KERN-BOT", role: "Quelle",  signal: "Ich existiere BOT" },
    monitor: { id: "TP12-MON-BOT",  role: "Spiegel", signal: "Er existiert wirklich BOT" },
    sched:   { id: "TP12-SCH-BOT",  role: "Ordner",  signal: "Ich habe es geordnet BOT" },
    ui:      { id: "TP12-UI-BOT",   role: "Fenster", signal: "Ich zeige es BOT" }
};

// TP12 Scan
function tp12_scan() {
    return {
        oben: TP4_TOP,
        mitte: TP8_MID,
        unten: TP4_BOTTOM,
        form: "TP12 = TP4 oben + TP8 Mitte + TP4 unten"
    };
}

console.log(tp12_scan());

