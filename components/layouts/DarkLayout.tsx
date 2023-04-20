// Se expecifican el tipo de dato que son las props y el tipo de elemento"" que es el componente
interface propsWithChildren {
  children: React.ReactNode
}

export const DarkLayout = ({ children } : propsWithChildren): JSX.Element => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
