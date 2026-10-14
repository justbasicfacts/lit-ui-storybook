import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{T as l}from"./table-sort-label-D3fkCfQr.js";import{T as c,a as s,b as d,c as t,d as a,e as b}from"./table-cell-jLg_Tecp.js";import"./preload-helper-Bs85Y4nq.js";const T=[{id:1,name:"Frozen yoghurt",calories:159,fat:6},{id:2,name:"Ice cream sandwich",calories:237,fat:9},{id:3,name:"Eclair",calories:262,fat:16}],j={title:"Components/Data display/TableSortLabel",component:l,parameters:{layout:"padded"},argTypes:{active:{control:"boolean"},direction:{control:"select",options:["asc","desc"]},hideSortIcon:{control:"boolean"},children:{control:"text"},onSortRequest:{action:"sort-request"}},args:{active:!0,direction:"asc",hideSortIcon:!1,children:"Calories"}},i={render:n=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(a,{variant:"head",scope:"col",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:e.jsx(l,{...n})}),e.jsx(a,{variant:"head",scope:"col",align:"right",sortDirection:"desc",children:e.jsx(l,{active:!0,direction:"desc",children:"Fat (g)"})})]})}),e.jsx(b,{children:T.map(r=>e.jsxs(t,{hover:!0,children:[e.jsx(a,{children:r.name}),e.jsx(a,{align:"right",children:r.calories}),e.jsx(a,{align:"right",children:r.fat})]},r.id))})]})})},o={render:()=>e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(a,{variant:"head",scope:"col",children:e.jsx(l,{active:!0,direction:"asc",children:"Active ascending"})}),e.jsx(a,{variant:"head",scope:"col",children:e.jsx(l,{active:!0,direction:"desc",children:"Active descending"})}),e.jsx(a,{variant:"head",scope:"col",children:e.jsx(l,{children:"Inactive"})}),e.jsx(a,{variant:"head",scope:"col",children:e.jsx(l,{hideSortIcon:!0,children:"Icon hidden"})})]})}),e.jsx(b,{children:T.map(n=>e.jsxs(t,{hover:!0,children:[e.jsx(a,{children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:"-"})]},n.id))})]})})},m=["Default","States"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" scope="col">
              Dessert (100g serving)
            </TableCell>
            <TableCell variant="head" scope="col" align="right">
              <TableSortLabel {...args} />
            </TableCell>
            <TableCell variant="head" scope="col" align="right" sortDirection="desc">
              <TableSortLabel active direction="desc">
                Fat&nbsp;(g)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" scope="col">
              <TableSortLabel active direction="asc">
                Active ascending
              </TableSortLabel>
            </TableCell>
            <TableCell variant="head" scope="col">
              <TableSortLabel active direction="desc">
                Active descending
              </TableSortLabel>
            </TableCell>
            <TableCell variant="head" scope="col">
              <TableSortLabel>Inactive</TableSortLabel>
            </TableCell>
            <TableCell variant="head" scope="col">
              <TableSortLabel hideSortIcon>Icon hidden</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...o.parameters?.docs?.source}}};export{i as Default,o as States,m as __namedExportsOrder,j as default};
