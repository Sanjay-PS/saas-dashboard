import { ColorPaletteProp, Input, InputProps, VariantProp } from '@mui/joy';
import { Command, MagnifyingGlass } from '@phosphor-icons/react';

type SearchInputProps = {
    color?: ColorPaletteProp,
    variant?: VariantProp,
    showEndDecorator?: boolean,
} & InputProps

function SearchInput({ color, variant, showEndDecorator, ...props }: SearchInputProps) {
	return (
        <Input
            size='sm'
            variant={variant ?? 'plain'}
            color={color ?? 'neutral'}
            placeholder="Search"
            startDecorator={<MagnifyingGlass size={20}/>}        
            endDecorator={(showEndDecorator) ? <><Command size={20}/>/</> : <></>}        
            sx={{ 
                "--Input-radius": "8px",
                "--Input-placeholderOpacity": 0.4,
                "--Input-paddingInline": "12px",
                width: "14rem",
                ...props?.sx
            }}
            {...props}
        />
	);
}

export default SearchInput;