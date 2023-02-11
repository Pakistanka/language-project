import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={switchLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('language')}
        </Button>
    )
};

