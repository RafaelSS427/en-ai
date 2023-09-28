import { Button, Link, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

export const PopperApp = () => {
    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button
                    disableRipple
                    disableAnimation
                    isIconOnly
                    variant="light"
                >
                    👀
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <p>Create by <Link href="https://www.rafael-sequeira-sandoval.dev/" showAnchorIcon underline="hover" isExternal className="text-default text-sm">Rafael Sequeira Sandoval</Link></p>
            </PopoverContent>
        </Popover>
    )
}
