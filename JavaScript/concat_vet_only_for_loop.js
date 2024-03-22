// Concatenação de vetores usando apenas o 'for'
let vetor_a = [];
let vetor_b = [];
let vetor_c = [];

let m = parseInt(prompt());
let n = parseInt(prompt());

for (let i = 0; i < m; ++i){
    vetor_a[i] = parseInt(prompt());
}

for (let j = 0; j < n; ++j){
    vetor_b[j] = parseInt(prompt());
}

for (let k = 0; k < (m+n); ++k){
    if ( k < m ){
        vetor_c[k] = vetor_a[k];
    } else {
        vetor_c[k] = vetor_b[k % n];
    }
    
}

alert(vetor_c);
