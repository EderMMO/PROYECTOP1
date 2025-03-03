import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { OrdersProvider } from './src/context/OrdersContext';

export default function App() {
    return (
        <OrdersProvider> 
            <NavigationContainer>
                <NavigationStack />
            </NavigationContainer>
        </OrdersProvider>
    );
};