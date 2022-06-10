let results = []
const st = [1, 21, 31, 41, 51, 61, 71, 81, 91];
const nd = [2, 22, 32, 42, 52, 62, 72, 82, 92];
const rd = [3, 23, 33, 43, 53, 63, 73, 83, 93]

const doggo = (x) => {

    results.length = 0;

    for (i = 1; i < 101; i++) {
        if (i === x) {
            continue;
        }
         if (st.includes(i)) {
            results.push(`${i}st`);
        } else if (nd.includes(i)) {
            results.push(`${i}nd`);
        } else if (rd.includes(i)) {
            results.push(`${i}rd`);
        } else {
            results.push(`${i}th`);
        }
    }

    return results

}

module.exports = {
    doggo
}
