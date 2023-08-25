import styled from '@emotion/styled';

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

export const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />
};
