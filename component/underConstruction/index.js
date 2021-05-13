import {Container, Mail} from "./style/underConstruction";
import LazyLoad from 'react-lazyload';

export default function UnderConstruction({children, ...restProps}) {

    return(
        <LazyLoad height={200}>
            <Container {...restProps}>{children}</Container>
        </LazyLoad>
    )
}

UnderConstruction.Mail = function ({children, ...restProps}) {

    return(
        <Mail {...restProps}>
            <a href={`mailto:${children}`}>{children}</a>
        </Mail>
    )
}