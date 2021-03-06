const important = node => node.important;
const unimportant = node => !node.important;
const hasInherit = node => ~node.value.indexOf('inherit');
const hasInitial = node => ~node.value.indexOf('initial');

export default (...props) => {
    if (props.some(hasInherit) || props.some(hasInitial)) {
        return props.every(hasInherit) || props.every(hasInitial);
    }
    return props.every(unimportant) || props.every(important);
};
