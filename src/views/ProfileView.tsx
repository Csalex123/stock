import React from 'react';
import { connect } from 'react-redux';
import ProfileCard, { User } from '../components/Authentication/ProfileCard';
import Header from '../components/Header';
import Container from '../shared/Container';

declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {

    return (
        <>
            <Header title="AlgaStock" />
            <Container>
                <div style={{ marginTop: 50 }}>
                    <ProfileCard user={props.user} />
                </div>
            </Container>
        </>
    );
}

const mapStateToProps = () => ({
    user: {
        name: 'Alex Ricardo',
        email: 'Alex.ricardo1999@hotmail.com',
    }
})

export default connect(mapStateToProps)(ProfileView);
