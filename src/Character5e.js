/**
 * Model for 5e character data
 */

export default class Character5e {
    /**
     * Property notes...
     * @prop {Array[]} notes_adv Adventure notes [header, text]
     * @prop {Array[]} notes_cam Campaign notes [header, text]
     * @prop {Array[]} npcs NPC notes [header, text]
     * @prop {Array[]} factions NPC notes [header, text]
     */
    constructor ({
        key = '',
        charname = '',
        charclass = '',
        race = '',
        background = '',
        alignment = '',
        level = 1,
        experience = 0,
        inspiration = '',
        proficiency = '+2',
        armor_class = '',
        speed = 30,
        hp_cur = '',
        hp_max = '',
        hd_cur = '',
        hd_max = '',
        deathSave = {
            success: 0,
            fail: 0
        },
        str = 10,
        dex = 10,
        con = 10,
        intel = 10,
        wis = 10,
        cha = 10,
        saves = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'intel': 0,
            'wis': 0,
            'cha': 0
        },
        skills = {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 0,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 0,
            intimidation: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            persuasion: 0,
            religion: 0,
            sleight_of_Hand: 0,
            stealth: 0,
            survival: 0
        },
        weapons = '',
        proficiencies_other = '',
        languages = '',
        traits = '',
        ideals = '',
        bonds = '',
        flaws = '',
        appearance = '',
        equipment = '',
        cp = '',
        sp = '',
        gp = '',
        pp = '',
        features = '',
        notes = '',
        notes_adv = [],
        notes_cam = [],
        npcs = [],
        factions = [],
        spell_ability = '',
        spell_save = '',
        spell_attack = '',
        spell_slots = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        },
        spell_slots_cur = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        },
        spells = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        },
        cpn_name = '',
        cpn_species = '',
        cpn_level = 1,
        cpn_experience = 0,
        cpn_armor_class = '',
        cpn_speed = 30,
        cpn_hp_cur = '',
        cpn_hp_max = '',
        cpn_hd_cur = '',
        cpn_hd_max = '',
        cpn_deathSave = {
            success: 0,
            fail: 0
        },
        cpn_str = 10,
        cpn_dex = 10,
        cpn_con = 10,
        cpn_intel = 10,
        cpn_wis = 10,
        cpn_cha = 10,
        cpn_saves = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'intel': 0,
            'wis': 0,
            'cha': 0
        },
        cpn_skills = '',
        cpn_weapons = '',
        cpn_equipment = '',
        cpn_features = '',
        updated = ''
    }) {
        this.app = 'character-sheet-5e';
        this.key = key;
        this.charname = charname;
        this.charclass = charclass;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.level = level;
        this.experience = experience;
        this.inspiration = inspiration;
        this.proficiency = proficiency;
        this.armor_class = armor_class;
        this.speed = speed;
        this.hp_cur = hp_cur;
        this.hp_max = hp_max;
        this.hd_cur = hd_cur;
        this.hd_max = hd_max;
        this.deathSave = deathSave;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.intel = intel;
        this.wis = wis;
        this.cha = cha;
        this.saves = saves;
        this.skills = skills;
        this.weapons = weapons;
        this.proficiencies_other = proficiencies_other;
        this.languages = languages;
        this.traits = traits;
        this.ideals = ideals;
        this.bonds = bonds;
        this.flaws = flaws;
        this.appearance = appearance;
        this.equipment = equipment;
        this.cp = cp;
        this.sp = sp;
        this.gp = gp;
        this.pp = pp;
        this.features = features;
        this.cpn_name = cpn_name;
        this.cpn_species = cpn_species;
        this.cpn_level = cpn_level;
        this.cpn_experience = cpn_experience;
        this.cpn_armor_class = cpn_armor_class;
        this.cpn_speed = cpn_speed;
        this.cpn_hp_cur = cpn_hp_cur;
        this.cpn_hp_max = cpn_hp_max;
        this.cpn_hd_cur = cpn_hd_cur;
        this.cpn_hd_max = cpn_hd_max;
        this.cpn_deathSave = cpn_deathSave;
        this.cpn_str = cpn_str;
        this.cpn_dex = cpn_dex;
        this.cpn_con = cpn_con;
        this.cpn_intel = cpn_intel;
        this.cpn_wis = cpn_wis;
        this.cpn_cha = cpn_cha;
        this.cpn_saves = cpn_saves;
        this.cpn_skills = cpn_skills;
        this.cpn_weapons = cpn_weapons;
        this.cpn_equipment = cpn_equipment;
        this.cpn_features = cpn_features;
        this.notes = notes;
        // @version < 1.8.0 Backwards compatible convert string to the text of a first list item.
        if (!Array.isArray(notes_adv)) {
            notes_adv = [
                ['', notes_adv]
            ];
        }
        this.notes_adv = notes_adv;
        // @version < 1.8.0 Backwards compatible convert string to the text of a first list item.
        if (!Array.isArray(notes_cam)) {
            notes_cam = [
                ['', notes_cam]
            ];
        }
        this.notes_cam = notes_cam;
        this.npcs = npcs;
        this.factions = factions;
        this.spell_ability = spell_ability;
        this.spell_save = spell_save;
        this.spell_attack = spell_attack;
        this.spell_slots = spell_slots;
        this.spell_slots_cur = spell_slots_cur;
        this.spells = spells;
        this.updated = updated;
    }
};
