// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './BackButton.module.scss';
import { BUTTONS } from '../../../constants';

const BackButton = () => (
    <Link rel="back" to={'/'} className={styles['back-btn']}>{BUTTONS.BACK}</Link>
);

export default BackButton;
