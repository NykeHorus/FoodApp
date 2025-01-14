import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {Text} from '../../../components/typography/Text';

export const ResturantCard = styled(Card)`
  background-color: white;
`;

export const ResturantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-item: 'center';
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
