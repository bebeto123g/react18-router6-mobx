import React from 'react'
import styles from './Header.module.scss'
import Container from '../../UI/Container/Container'
import AppNavLink from '../NavLink/NavLink'
import BackButton from '../../UX/BackButton/BackButton'
import ToggleAuthButton from '../../UX/ToggleAuthButton/ToggleAuthButton'

const Header = () => {
    // const match = useMatch('/list/:search')
    // будет !== null когда роуты совпадают, хорошо для if

    return (
        <div className={styles.header}>
            <Container className={styles.container}>
                <AppNavLink to={'/'}>Домой</AppNavLink>
                <AppNavLink to={'/list'}>Список</AppNavLink>
                <AppNavLink to={'/about'}>О проекте</AppNavLink>
                <AppNavLink to={'/memo'}>Memo</AppNavLink>
                <AppNavLink to={'/posts'}>Посты</AppNavLink>
                <BackButton className={styles.backBtn}>Назад</BackButton>
                <ToggleAuthButton
                    className={styles.backBtn}
                    signIn='Войти'
                    signOut='Выйти'
                />
            </Container>
        </div>
    )
}

export default Header
