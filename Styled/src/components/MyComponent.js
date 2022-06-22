import styled from 'styled-components/native';

// styled-component 정의 및 객체화 -> ₩₩ 사이에 작성
// styled. 뒤에는 네이티브에서 제공해주는 것만 쓸 수 있음!
const MyComponent = styled.Text`
    color : '#FFFFFF';
    font-size : 14pt;
`;  

// 공통되는 속성들은 따로 이렇게 변수화 해서 불러오기 가능 -> 기존 CSS의 불편한 점 개선
const commonText = css`
    color : '#FFFFFF';
    font-size : 14pt;
`;

// ""재사용"" : 그대로 가져다가 씀
const BoldText = styled.Text`
    ${commonText}
    font-weight : 600;
`;

// ""상속"" : 가져오되, 바꾸고싶은 부분은 바꿀 수 있음
const ErrorText = styled(BoldText)`
    color : red;
`;