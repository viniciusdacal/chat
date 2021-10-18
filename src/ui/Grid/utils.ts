// eslint-disable-next-line import/prefer-default-export
export const calculateColumnWidth = ({ sm }: { sm?: ColSpan }): `${number}%` => (sm ? `${(100 / 12) * sm}%` : '100%');
