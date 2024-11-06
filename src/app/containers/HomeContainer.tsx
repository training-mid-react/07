import { useHomeContainer } from '@core/hooks';
import { Home } from '@ui/components/Home';
import { LayoutHome } from '@ui/layouts/LayoutHome/LayoutHome';

export const HomeContainer = () => {
    const { onSubmit } = useHomeContainer();

    return (
        <LayoutHome>
            <Home onSubmit={onSubmit} />
        </LayoutHome>
    );
};
