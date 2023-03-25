import * as React from 'react';
import { Grid } from "@mui/material";
import { Experience } from '../models';
import experience from '../resources/experience.json';
import ExperienceCard from './ExperienceCard';

interface ExperienceResource {
  experience: Array<Experience>;
}

export default function LandingComponent() {
  return (
    <Grid container sx={{ borderRadius: 10 }}>
      {(experience as ExperienceResource).experience.map(
        exp => (
          <Grid item>
            <ExperienceCard bgColor={exp.color} experience={exp} />
          </Grid>
        )
      )}
    </Grid>
  );
}