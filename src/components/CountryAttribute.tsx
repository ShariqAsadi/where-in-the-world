interface CountryAttributesProps {
  name: string;
  value: string | number;
}

export default function CountryAttribute(props: CountryAttributesProps) {
  const { name, value } = props;

  return (
    <p className='text-sm font-semibold text-light-text'>
      {name}: <span className='font-light'>{value}</span>
    </p>
  );
}
