let results = [];
for (let x = 0; x < 10001; x++) {
    const startingValidatorBal = [10, 2, 2, 1, 1, 1, 1, 1, 1];
    const validatorBalance = [...startingValidatorBal];
    // create validators
    const createValidators = () => {
        let validators = validatorBalance.reduce((acc, bal, id) => {
            for (let i = 0; i < bal; i++) {
                acc.push(id);
            }
            return acc;
        }, []);
        return validators;
    }

    // run network
    let validators = createValidators();
    for (let i = 0; i < 100000; i++) {
        var selectedVal = validators[Math.floor(Math.random() * validators.length)];
        validatorBalance[selectedVal] += 1;
        validators.push(selectedVal);
    }
    const share = validatorBalance[0] / validatorBalance.reduce((sum, cur) => sum + cur, 0);
    results.push(share);
}
const median = results[Math.floor(results.length/2)];
console.log(median);

