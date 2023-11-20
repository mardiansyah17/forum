const truncate = (text: string): string => {

    const maxLength = 350;
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength)}...`;

};

export default truncate;