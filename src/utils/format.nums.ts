export const formatNums = (count: number): string => {
    if (count >= 1_000_000) {
        return (count / 1_000_000).toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        }) + 'M';
    }

    if(count >= 1_000){
        return (count / 1_000).toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        }) + 'k';
    }

    return count.toLocaleString('pt-BR');
}