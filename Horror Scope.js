const actions = ['malled', 'haunted', 'bitten', 'ripped', 'intimidated'];

const effects = ['to death', 'to insanity', 'to an inch of your life', 'greviously', 'mildly'];

const beasts = ['ghost', 'stalker', 'demon', 'zombie', 'vampire'];


let randomSelect1 = Math.floor(Math.random() * 5)
let randomSelect2 = Math.floor(Math.random() * 5)
let randomSelect3 = Math.floor(Math.random() * 5)


const randSentence = (array1, array2, array3) => {
    let i = randomSelect1;
    let j = randomSelect2;
    let k = randomSelect3;

    return `You will be ${array1[i]} ${array2[j]} by a ${array3[k]}!`
};


console.log(randSentence(actions, effects, beasts));