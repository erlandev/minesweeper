import React, {useCallback} from 'react';
import cn from 'classnames';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

import Panel from '../../common/Panel';
import {settings} from '../hooks/useSettings';
import {SettingsLevel} from '../../types';
import style from './style.module.css';

interface IProps {
  className?: string;
  level: SettingsLevel;
  onLevelChange: (level: SettingsLevel) => void;
}

function Settings({className = '', level, onLevelChange}: IProps) {

  const handleLevelChange = useCallback(
    (settingsLevel: SettingsLevel) => () => onLevelChange(settingsLevel),
    [onLevelChange],
  );

  return (
    <Panel className={cn(style.Settings, className)}>
      {settings.map((s) => (
        <ButtonUnstyled
          key={s.level}
          className={cn(style.button, {[style.isActive]: level === s.level})}
          onClick={handleLevelChange(s.level)}
        >
          {s.level}
        </ButtonUnstyled>
      ))}
    </Panel>
  );
}

export default React.memo(Settings);
