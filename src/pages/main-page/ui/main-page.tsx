import { Counter } from "entities/counter/ui/counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			{t('Главная страница')}
			<Counter />
		</div>
	)
}

export default MainPage