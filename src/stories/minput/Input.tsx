import React from 'react';
import {
  FormControl,
  InputLabel,
  InputBase,
  withStyles,
  Theme,
  createStyles,
  fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 0,
    },
  }),
);

const CustomFormControl = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      borderBottom: '1px dashed #ced4da',
      paddingBottom: 10,
      marginBottom: 10,
      '&:last-child': {
        borderBottom: 0,
        paddingBottom: 0,
        marginBottom: 0,
      },
      '& label': {
        transform: 'none',
        display: 'inline-flex',
        position: 'static',
        width: 150,
        paddingLeft: 10,
      },
      '& input': {
        borderRadius: 4,
        border: '1px solid #ced4da',
        padding: '10px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
    },
  }),
)(FormControl);

export const Input: React.FC<any> = ({ id, label, value }) => {
  const classes = useStyles();

  const changeData = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <CustomFormControl className={classes.root}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputBase defaultValue={value} id={id} onChange={changeData} />
    </CustomFormControl>
  );
};
