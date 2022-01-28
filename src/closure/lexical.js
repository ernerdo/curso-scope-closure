const BuildCount =  (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount;
};

const myCount = BuildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = BuildCount(10);
myOtherCount();
myOtherCount();