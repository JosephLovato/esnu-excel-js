# CSCI220: ESNU Excel Grading Scripts for Projects & Exams

*(Originally authored by Joey Lovato Fall 2022)*

This repo contains the typescript source code used in the ScriptLab extension in Microsoft Excel to compute ESNU grades for CSCI220 (CS@Mines) Fall 2022. 

## Files

- `analysis_projects_scripts.ts` Functions used to calculate analysis project scores (part scores and final score)
- `midterm_scripts.ts` Functions used to calculate the midterm exam scores
- `final_scripts.ts` Functions used to calculate the final exam scores
- `tests.ts` For basic testing of functions

## Testing
You will need `ts-node` to run the tests:
```
npm install ts-node -g
```

Then, to run the tests, run 
```
ts-node tests.ts
```

## Notes

For testing purposes (`tests.ts`), some functions were declared with `export`. The typescript engine provided by ScriptLab does not support this feature, so you'll need to remove those when running in Excel. 

