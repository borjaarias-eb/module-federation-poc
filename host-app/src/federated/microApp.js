import React, { useEffect } from 'react';

const MicroAPP = ({ name }) => {
  const [MicroApp, setMicroApp] = React.useState(null);

  useEffect(() => {
    import('microApp/MicroApp').then((module) => {
      setMicroApp(() => module.default);
    });
  }, []);

  if (!MicroApp) return <div>Loading...</div>;

  return <MicroApp name={name} />;
}

export default MicroAPP;
